function generateSvgNode() {
  const namespace = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(namespace, 'svg');
  svg.setAttribute('version', '1.1');
  svg.setAttribute('baseProfile', 'full');
  svg.setAttribute('width', '300');
  svg.setAttribute('height', '200');

  // add rectangle
  const rect = document.createElementNS(namespace, 'rect');
  rect.setAttribute('width', '100%');
  rect.setAttribute('height', '100%');
  rect.setAttribute('fill', 'Lavender');
  svg.appendChild(rect);

  // add circles
  const circles = [
    ['150', '100', '80', 'MediumOrchid'],
    ['150', '100', '70', 'MediumPurple'],
    ['150', '100', '60', 'RebeccaPurple'],
  ];
  circles.forEach(([cx, cy, r, fill]) => {
    const circle = document.createElementNS(namespace, 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', r);
    circle.setAttribute('fill', fill);

    svg.appendChild(circle);
  })

  // add top text
  const text = document.createElementNS(namespace, 'text');
  text.setAttribute('x', '150');
  text.setAttribute('y', '125');
  text.setAttribute('font-size', '40');
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('fill', 'White');
  text.textContent = 'SVG';
  svg.appendChild(text);

  return svg;
}

function insertSvg() {
  const svgContainer = document.querySelector('#js-generated-svg');
  svgContainer.appendChild(generateSvgNode());
}

insertSvg();
