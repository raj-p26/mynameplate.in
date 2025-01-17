import { Feedback } from "$lib/server/db";

interface FeedbackResponse {
  status?: string;
  name?: string;
  email?: string;
  feedback?: string;
}

export const actions = {
  default: async ({ request }) => {
    let form_data = await request.formData();
    let response: FeedbackResponse = {};

    let name = form_data.get("contact-name");
    let email = form_data.get("contact-email");
    let feedback = form_data.get("contact-feedback");

    if (name == null || !name.toString().trim()) {
      response.status = "failed";
      response.name = "Invalid Name";
    }

    if (email == null || !email.toString().trim()) {
      response.status = "failed";
      response.email = "Email Name";
    }

    if (feedback == null || !feedback.toString().trim()) {
      response.status = "failed";
      response.feedback = "Invalid Feedback";
    }

    if (response.status == "failed") {
      return response;
    }

    if (!Feedback.is_created) Feedback.up();

    let feedback_data = {
      name: name.toString(),
      email: email.toString(),
      message: feedback.toString(),
    };

    let { success, err } = Feedback.add(feedback_data);
    if (err != null && success == false) {
      response.status = "failed";
      response.feedback = err;
    }

    return response;
  },
};
