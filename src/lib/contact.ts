export const FARMKY_PHONE_NUMBER = "918360131158";
export const FARMKY_PHONE_LINK = `tel:+${FARMKY_PHONE_NUMBER}`;

export function createWhatsAppEnquiryUrl(formData: FormData) {
  const value = (name: string) => String(formData.get(name) ?? "").trim();
  const enquiryType = value("enquiryType") || value("type");
  const enquiry = [
    "New FARMKY website enquiry",
    "",
    `Full name: ${value("name")}`,
    `Mobile number: ${value("phone")}`,
    `Email address: ${value("email")}`,
    `Enquiry type: ${enquiryType}`,
    `Subject: ${value("subject")}`,
    `Message: ${value("message")}`,
  ].join("\n");

  return `https://wa.me/${FARMKY_PHONE_NUMBER}?text=${encodeURIComponent(enquiry)}`;
}
