import 'i18next';

import type common from '../public/locales/uk/common.json';
import type header from '../public/locales/uk/header.json';
import type offer from '../public/locales/uk/offer.json';
import type notFound from '../public/locales/uk/notFound.json';
import type policy from '../public/locales/uk/policy.json';
import type feedbacks from '../public/locales/uk/feedbacks.json';
import type footer from '../public/locales/uk/footer.json';
import type contacts from '../public/locales/uk/contacts.json';
import type form from '../public/locales/uk/form.json';
import type workStages from '../public/locales/uk/workStages.json';
import type commonQuestions from '../public/locales/uk/commonQuestions.json';
import type partners from '../public/locales/uk/partners.json';
import type workWithUs from '../public/locales/uk/workWithUs.json';
import type technologies from '../public/locales/uk/technologies.json';
import type youGet from '../public/locales/uk/youGet.json';
import type ourServices from '../public/locales/uk/ourServices.json';
import type pridedWorks from '../public/locales/uk/pridedWorks.json';
import type brief from '../public/locales/uk/brief.json';
import type commonPortfolio from '../public/locales/uk/commonPortfolio.json';
import type project from '../public/locales/uk/project.json';
import type services from '../public/locales/uk/services.json';
import type servicesHeroAnimation from '../public/locales/uk/servicesHeroAnimation.json';
import type slider from '../public/locales/uk/slider.json';

interface I18nNamespaces {
  common: typeof common;
  header: typeof header;
  offer: typeof offer;
  notFound: typeof notFound;
  policy: typeof policy;
  feedbacks: typeof feedbacks;
  footer: typeof footer;
  contacts: typeof contacts;
  form: typeof form;
  workStages: typeof workStages;
  commonQuestions: typeof commonQuestions;
  partners: typeof partners;
  workWithUs: typeof workWithUs;
  technologies: typeof technologies;
  youGet: typeof youGet;
  ourServices: typeof ourServices;
  pridedWorks: typeof pridedWorks;
  brief: typeof brief;
  commonPortfolio: typeof commonPortfolio;
  project: typeof project;
  services: typeof services;
  servicesHeroAnimation: typeof servicesHeroAnimation;
  slider: typeof slider;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: I18nNamespaces;
  }
}
