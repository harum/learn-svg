let historyIntervalId;

function generateSvgNode(items) {
  const namespace = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(namespace, 'svg');
  svg.setAttribute('version', '1.1');
  svg.setAttribute('baseProfile', 'full');
  svg.setAttribute('width', '100');
  svg.setAttribute('height', '100');
  svg.setAttribute('viewBox', '0 0 100 100');

  const vLine = document.createElementNS(namespace, 'line');
  vLine.setAttribute('x1', '10');
  vLine.setAttribute('y1', '5');
  vLine.setAttribute('x2', '10');
  vLine.setAttribute('y2', '95');
  vLine.setAttribute('stroke', 'RebeccaPurple');
  svg.appendChild(vLine);

  // add bars
  let currentX = 15;
  items.forEach(height => {
    const rect = document.createElementNS(namespace, 'rect');
    rect.setAttribute('x', currentX);
    rect.setAttribute('y', 90 - height);
    rect.setAttribute('width', '10');
    rect.setAttribute('height', height);
    rect.setAttribute('fill', 'MediumOrchid');
    rect.setAttribute('class', 'bar');
    svg.appendChild(rect);

    currentX += 15;
  })

  // add x and y axis
  const hLine = document.createElementNS(namespace, 'line');
  hLine.setAttribute('x1', '2');
  hLine.setAttribute('y1', '90');
  hLine.setAttribute('x2', '95');
  hLine.setAttribute('y2', '90');
  hLine.setAttribute('stroke', 'RebeccaPurple');
  svg.appendChild(hLine);

  return svg;
}

function insertSvg() {
  const items = [20, 35, 60, 45];
  const svgContainer = document.querySelector('#chart-svg');
  svgContainer.appendChild(generateSvgNode(items));
}

function updateSvg(items) {
  const bars = document.querySelectorAll('.bar');

  bars.forEach((bar, index) => {
    bar.setAttribute('y', 90 - items[index]);
    bar.setAttribute('height', items[index]);
  })
}

function startHistory() {
  const items = [
    [25, 32, 68, 53],
    [28, 38, 61, 43],
    [45, 47, 74, 33],
    [49, 42, 80, 25],
    [55, 36, 82, 42],
    [68, 33, 80, 60],
    [72, 32, 83, 65],
    [65, 49, 75, 70],
  ];
  let currentIndex = 0;

  updateData();
  historyIntervalId = setInterval(updateData, 1000);

  function updateData() {
    updateSvg(items[currentIndex])
    currentIndex = (currentIndex + 1) % items.length;
  }
}

function stopHistory() {
  clearInterval(historyIntervalId);
}

function registerEvent() {
  document.querySelector('#start-history').addEventListener('click', startHistory);
  document.querySelector('#stop-history').addEventListener('click', stopHistory);

  document.addEventListener('click', (event) => {
    if (event.target.closest('.bar')) {
      console.log(event.target.closest('.bar').getAttribute('height'));
    }
  });
}

insertSvg();
registerEvent();

