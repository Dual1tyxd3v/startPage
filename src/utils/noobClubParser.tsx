export function loadNoobClub(data: string) {
  const div = document.createElement('div');
  div.innerHTML = data.split('<body')[1];
  const content = div.querySelectorAll('.first');
  // eslint-disable-next-line no-console
  console.log(content.length);
}
