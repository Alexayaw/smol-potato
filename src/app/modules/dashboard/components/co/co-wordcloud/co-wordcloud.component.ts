import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

// import cloud from 'd3-cloud'; 
@Component({
  selector: 'app-co-wordcloud',
  templateUrl: './co-wordcloud.component.html'
})
export class CoWordcloudComponent implements OnInit {
  @ViewChild('container', { static: true }) containerRef!: ElementRef;

  ngOnInit() {
    const data = [
      { word: 'Great', count: 5 },
      { word: 'Excellent', count: 7 },
      { word: 'Bad', count: 3 },
      { word: 'Terrible', count: 10 },
      { word: 'Amazing', count: 6 }
      // Add more words here
    ];

    const width = 800;
    const height = 400;

    const svg = d3.select(this.containerRef.nativeElement)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const maxCount = d3.max(data, (d: any) => d.count);
    const fontSizeScale = d3.scaleLinear()
      .domain([0, maxCount])
      .range([10, 50]); // Adjust the range to control the font size

    // const layout = cloud.cloud()
    //   .size([width, height])
    //   .words(data.map((d: any) => ({ text: d.word, size: fontSizeScale(d.count) })))
    //   .padding(5)
    //   .rotate(() => Math.random() < 0.5 ? 0 : 90)
    //   .fontSize((d: any) => d.size)
    //   .on('end', draw);

    // layout.start();

    function draw(words: any[]) {
      svg.append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`)
        .selectAll('text')
        .data(words)
        .enter().append('text')
        .style('font-size', (d: any) => `${d.size}px`)
        .style('fill', (_, i) => d3.schemeCategory10[i % 10])
        .attr('text-anchor', 'middle')
        .attr('transform', (d: any) => `translate(${d.x}, ${d.y})rotate(${d.rotate})`)
        .text((d: any) => d.text);
    }
  }
}
