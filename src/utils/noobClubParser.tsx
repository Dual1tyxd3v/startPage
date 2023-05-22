import { NOOB_CLUB } from '../const';

export function loadNoobClub(data: string) {
  const div = document.createElement('div');
  div.innerHTML = data.split('<body')[1];
  const titles = div.querySelectorAll('.entry-header');
  const headers: string[] = [];
  titles.forEach((title) => {
    headers.push(title.querySelector('a')?.textContent as string);
  });
  const prevTitles = localStorage.getItem('nclub') || '';
  if (prevTitles === headers.join('@')) {
    return null;
  }
  const content = div.querySelectorAll('.first');
  const container = document.createElement('div');
  let counter = 0;

  for (; counter < content.length; counter++) {
    if (prevTitles.includes(headers[counter])) {
      break;
    }
    const tempDiv = document.createElement('div');
    tempDiv.classList.add('noobclub__item');
    const origHref = titles[counter].querySelector('a')?.href;
    const src = `${NOOB_CLUB.url}${(origHref as string).slice(origHref?.lastIndexOf('/') as number + 1)}`;
    tempDiv.innerHTML += `<a class="noobclub__title" href="${src}">${headers[counter]}</a>`;
    tempDiv.append(content[counter].querySelector('.entry-content') as HTMLElement);
    container.append(tempDiv);
  }
  return {
    counter: ` (${counter})`, container, headers: headers.join('@')
  };
}
