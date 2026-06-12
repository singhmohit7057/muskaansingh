const CONTACT_KEY = import.meta.env.VITE_WEB3FORMS_CONTACT_KEY;
const COLLAB_KEY  = import.meta.env.VITE_WEB3FORMS_COLLAB_KEY;

async function submitToWeb3Forms(accessKey: string, fields: Record<string, string>) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: accessKey, from_name: "Muskaan Singh Website", ...fields }),
  });
  const json = await res.json();
  return { success: json.success === true };
}

export async function submitContact(form: HTMLFormElement) {
  try {
    const data = new FormData(form);
    return await submitToWeb3Forms(CONTACT_KEY, {
      name:    String(data.get("name")    ?? ""),
      email:   String(data.get("email")   ?? ""),
      subject: "Contact Form - Website",
      message: String(data.get("message") ?? ""),
    });
  } catch {
    return { success: false };
  }
}

export async function submitCollaboration(form: HTMLFormElement) {
  try {
    const data = new FormData(form);
    return await submitToWeb3Forms(COLLAB_KEY, {
      name:      String(data.get("name")      ?? ""),
      email:     String(data.get("email")     ?? ""),
      brand:     String(data.get("brand")     ?? ""),
      instagram: String(data.get("instagram") ?? ""),
      message:   String(data.get("message")   ?? ""),
      subject:   "Enquire Form - Website",
    });
  } catch {
    return { success: false };
  }
}
