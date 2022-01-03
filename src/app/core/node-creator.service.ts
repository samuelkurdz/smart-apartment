import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NodeCreatorService {

  createRecordKey(node: Node, index: number) {
    const span = document.createElement('span');
    span.textContent = String(index + 1);
    span.style.width = `16px`;
    span.style.height = `16px`;
    span.style.color = 'white';
    span.style.border = '#831843 solid 1px';
    span.style.background = '#ec4899';
    span.style.padding = '8px';
    span.style.borderRadius = '100%';
    span.style.display = 'flex';
    span.style.flexDirection = 'column';
    span.style.alignItems = 'center';
    span.style.justifyContent = 'center';
    node.appendChild(span);
  }

  createLocationIcon(node: Node) {
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );

    iconSvg.setAttribute('fill', 'currentColor');
    iconSvg.setAttribute('viewBox', '0 0 20 20');
    iconSvg.setAttribute('stroke', 'black');

    iconPath.setAttribute(
      'd',
      'M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
    );
    iconPath.setAttribute('stroke-linecap', 'round');
    iconPath.setAttribute('stroke-linejoin', 'round');
    iconPath.setAttribute('stroke-width', '1');
    iconPath.setAttribute('fill-rule', 'evenodd');

    iconSvg.appendChild(iconPath);

    node.appendChild(iconSvg);
  }

}