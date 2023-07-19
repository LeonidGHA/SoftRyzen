import axios from 'axios';
axios.defaults.baseURL = '';
axios.defaults.params = {};

interface UserProps {
  name: object;
  email: object;
  information: object;
}

interface UserPropsBrief {
  services?: object | string;
  discover?: object | string;
  corporateStyle?: object | string;
  projectLaunchDates?: object | string;
  site?: object | string;
  name: object | string;
  email: object | string;
  phone: object | string;
  information?: object | string;
}

export async function sendGoogleTable(user: UserProps) {
  const res = await fetch('api/google-sheet-service', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(user),
  });
  return res.json();
}
export async function sendGoogleTableBrief(user: UserPropsBrief) {
  const res = await fetch('api/google-sheet-service-brief', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(user),
  });
  return res.json();
}

export const sendMessageToTg = async (text: string) => {
  const TG_URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_USER_TELEGRAM_ID}`;

  const response = await axios.post(TG_URL, {
    text,
    parse_mode: 'HTML',
  });
  return response;
};
