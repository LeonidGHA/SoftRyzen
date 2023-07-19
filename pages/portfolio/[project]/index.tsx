import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { ProjectInterface } from '@/@types/Project.props';
import { projectRoutes } from '@/utils/projectRoutes';

import { withLayout } from '@/layout/Layout';
import { ProjectHeroSection } from '@/page-components/ProjectHero';
import { ProjectAboutSection } from '@/page-components/ProjectAbout';
import { ProjectUserFlowSection } from '@/page-components/ProjectUserFlow';
import { ProjectTypographySection } from '@/page-components/ProjectTypography';
import { ProjectProblemsSection } from '@/page-components/ProjectProblems';
import { ProjectScreensSection } from '@/page-components/ProjectScreens/ProjectScreensSection';
import { ProjectScreensAndAnimationSection } from '@/page-components/ProjectScreensAndAnimation';
import { ProjectFeedbacksSection } from '@/page-components/ProjectFeedbacks';

import { Breadcrumbs } from '@/components/typography/Breadcrumbs';

const Project: NextPage = () => {
  const { query } = useRouter();

  const { t } = useTranslation('project');

  const projects = t('projects', {
    returnObjects: true,
    defaultValue: '',
  }) as unknown as ProjectInterface[];

  const project: ProjectInterface | undefined = projects.find(
    project => project.link === query.project,
  );

  if (!project) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{project.hero.title}</title>
      </Head>
      <div className="bg-white pt-3">
        <Breadcrumbs
          className="container"
          translation={project.hero.breadcrumbs}
        />
      </div>

      <ProjectHeroSection project={project.hero} />
      <ProjectAboutSection project={project.projectAbout} />
      <ProjectProblemsSection project={project.projectProblems} />
      <ProjectUserFlowSection project={project.projectUserFlow} />
      <ProjectScreensAndAnimationSection
        project={project.screensAndAnimation}
      />
      <ProjectTypographySection project={project.projectTypography} />
      <ProjectScreensSection project={project.projectScreens} />
      {project.projectFeedbacks.feedbacks.length !== 0 &&
      project.projectFeedbacks.feedbacks[0].review.length > 0 ? (
        <ProjectFeedbacksSection project={project.projectFeedbacks} />
      ) : null}
    </>
  );
};

export default withLayout(Project);

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  query,
}) => {
  const project: string | undefined = projectRoutes.find(
    route => route === query.project,
  );

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'uk', [
        'common',
        'header',
        'project',
        'slider',
        'footer',
      ])),
    },
  };
};
