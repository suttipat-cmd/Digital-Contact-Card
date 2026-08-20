const contact = {
  name: "Suttipat Ritsut",
  nickname: "FIFA",
  title: "Product Specialist",
  company: "Forward Insight Co., Ltd.",
  social: {
    line: "",
    linkedin: "",
    facebook: "",
    website: ""
  }
};

const socialLabels = { line: "LINE", linkedin: "LinkedIn", facebook: "Facebook", website: "Website" };
const socialLinks = document.querySelector("#social-links");
const toast = document.querySelector("#toast");
let toastTimer;

function currentUrl() {
  return window.location.protocol.startsWith("http") ? window.location.href : "";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function renderSocialLinks() {
  const entries = Object.entries(contact.social).filter(([, url]) => Boolean(url));
  if (!entries.length) return;
  socialLinks.hidden = false;
  socialLinks.innerHTML = entries.map(([key, url]) => `<a class="social-link" href="${url}" rel="noreferrer">${socialLabels[key]}</a>`).join("");
}

async function copyLink() {
  const url = currentUrl();
  if (!url) return showToast("Open the deployed site to copy its public link.");
  try {
    await navigator.clipboard.writeText(url);
    showToast("Link copied to clipboard");
  } catch {
    window.prompt("Copy this link:", url);
  }
}

async function shareContact() {
  const url = currentUrl();
  if (navigator.share && url) {
    try {
      await navigator.share({ title: `${contact.name} | ${contact.title}`, text: `${contact.name} (${contact.nickname}) — ${contact.title}`, url });
    } catch (error) {
      if (error.name !== "AbortError") copyLink();
    }
  } else {
    copyLink();
  }
}

document.querySelector("#share-button").addEventListener("click", shareContact);
renderSocialLinks();
