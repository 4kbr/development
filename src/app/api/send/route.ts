import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import { renderAsync } from "@react-email/components";
import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({
  senderEmail,
  message,
}: {
  senderEmail: string;
  message: string;
}) => {
  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: `${process.env.RESEND_FROM}`,
      to: `${process.env.RESEND_TO}`,
      subject: "Message from contact form",
      reply_to: senderEmail,
      html: await renderAsync(
        React.createElement(ContactFormEmail, {
          message: message,
          senderEmail: senderEmail,
        })
      ),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

export const GET = async (req: Request, res: Response) => {
  try {
    return NextResponse.json(
      {
        message: "Hello world",
      },
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  try {
    const body = await req.json();
    console.log({ body });

    const { message, senderEmail } = body as unknown as {
      message: string;
      senderEmail: string;
    };

    if (!message || !senderEmail) {
      throw new Error("data not complete");
    }
    const { error } = await sendEmail({ message, senderEmail });
    if (error) {
      throw error;
    }
    return NextResponse.json(
      {
        message: "Hello World",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
