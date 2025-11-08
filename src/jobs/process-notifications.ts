import { Akuuk } from '@/extensions/akuuk';
import sendEmail from '@/extensions/mail-service/send-email';

export async function processNotificationsEvent(
  eventId: any,
  data: Record<string, unknown>,
) {
  if (data.type === 'SMS') {
    return await sendSMSWithAkuuk(data);
  }
  if (data.type === 'EMAIL') {
    return await sendMail(data);
  }

  await sendSMSWithAkuuk(data);
  await sendMail(data);
  return true;
}

async function sendSMSWithAkuuk(data: any) {
  await Akuuk.sendSMS({
    country: data.country,
    message: data.message,
    number: data.phone,
  });
}

async function sendMail(data: any) {
  return await sendEmail({
    to: data.email!,
    variables: {
      email: data.email,
      to_name: data.name,
      ...data.variables,
    },
    template: data.template,
  }).catch((e) => console.log(e));
}
