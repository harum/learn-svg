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

insertSvg();
