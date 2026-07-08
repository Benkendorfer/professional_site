// Build a stable, human-readable Umami event name for an external publication
// link (DOI / arXiv / InspireHEP), derived from the URL so each link is unique.
export function linkEvent(href) {
  if (href.includes('arxiv.org/abs/')) {
    return `arXiv ${href.split('/abs/')[1]}`;
  }
  if (href.includes('inspirehep.net/literature/')) {
    return `Inspire ${href.split('/literature/')[1]}`;
  }
  if (href.includes('doi.org/')) {
    return `DOI ${href.split('doi.org/')[1]}`;
  }
  return href;
}
