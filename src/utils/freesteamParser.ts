import { DataURLs } from '../const';

export function loadFreeSteam(data: string) {
  const div = document.createElement('div');
  const container = document.createElement('div');
  container.classList.add('freesteam');
  div.innerHTML = data.split('<body')[1];
  const posts = [...div.querySelectorAll('.post-thumb')].filter((post) =>
    post.innerHTML.includes('https://freesteam.ru/category/active/')
  );

  const headers = posts.map((post) => {
    const title = post.querySelector('.entry-title')?.querySelector('a');
    return title?.textContent;
  });

  const prevTitles = localStorage.getItem('freeSteam') || '';
  if (prevTitles === headers.join('@')) {
    return null;
  }

  let counter = 0;
  for (; counter < posts.length; counter++) {
    if (prevTitles.includes(headers[counter] as string)) {
      break;
    }

    const tempDiv = document.createElement('a');
    tempDiv.classList.add('freesteam__card');
    tempDiv.href = `${DataURLs.SEARCH}${headers[counter] as string}`;

    const img = document.createElement('img');
    img.classList.add('freesteam__img');
    img.src = posts[counter].querySelector('img')?.dataset.src as string;

    const place = posts[counter].querySelector('.entry-cats')?.querySelector('a')?.textContent;
    const mark = document.createElement('p');
    mark.classList.add('freesteam__mark', `freesteam__mark--${place?.toLowerCase().replace(' ', '') as string}`);
    mark.textContent = place as string;

    const head = document.createElement('p');

    head.classList.add('freesteam__head');
    head.textContent = headers[counter] as string;

    tempDiv.append(img, mark, head);
    container.append(tempDiv);
  }
  return {
    counter: ` (${counter})`, container, headers: headers.join('@')
  };
}
