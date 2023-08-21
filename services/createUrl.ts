function createUrl(id: string, link: string): string {
  switch (id.toLowerCase()) {
    case "phone":
      return `tel:${link}`;
    case "email":
      return `mailto:${link}`;
    default:
      return link;
  }
}

export default createUrl;
