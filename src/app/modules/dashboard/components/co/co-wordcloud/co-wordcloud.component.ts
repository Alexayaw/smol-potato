import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

// import cloud from 'd3-cloud'; 
@Component({
  selector: '[co-wordcloud-chart-card]',
  templateUrl: './co-wordcloud.component.html'
})
export class CoWordcloudComponent implements OnInit {
  @ViewChild('container', { static: true }) containerRef!: ElementRef;

  ngOnInit() {
    const data = [
      { word: "Great", count: 5 },
      { word: "Excellent", count: 8 },
      { word: "Bad", count: 3 },
      { word: "Terrible", count: 3 },
      { word: "Amazing", count: 10 },
      { word: "Wonderful", count: 8 },
      { word: "Disappointing", count: 4 },
      { word: "Outstanding", count: 10 },
      { word: "Excellent service", count: 5 },
      { word: "Bad experience", count: 3 },
      { word: "Terrible customer support", count: 3 },
      { word: "Amazing quality", count: 6 },
      { word: "Wonderful atmosphere", count: 3 },
      { word: "Disappointing outcome", count: 2 },
      { word: "Outstanding performance", count: 3 },
      { word: "Satisfactory", count: 6 },
      { word: "Impressive", count: 8 },
      { word: "Poor", count: 6 },
      { word: "Exceptional", count: 9 },
      { word: "Average", count: 5 },
      { word: "Unsatisfying", count: 2 },
      { word: "Brilliant", count: 7 },
      { word: "Unimpressive", count: 3 },
      { word: "Remarkable", count: 9 },
      { word: "Unexceptional", count: 4 },
      { word: "Unsatisfactory", count: 1 },
      { word: "Superb", count: 9 },
      { word: "Unacceptable", count: 2 },
      { word: "Good", count: 5 },
      { word: "Dreadful", count: 1 },
      { word: "Delicious", count: 8 },
    ];

    var width = 800;
    var height = 600;

    // const svg = d3.select(this.containerRef.nativeElement)
    //   .append('svg')
    //   .attr('width', width)
    //   .attr('height', height);

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

    // function draw(words: any[]) {
    //   svg.append('g')
    //     .attr('transform', `translate(${width / 2}, ${height / 2})`)
    //     .selectAll('text')
    //     .data(words)
    //     .enter().append('text')
    //     .style('font-size', (d: any) => `${d.size}px`)
    //     .style('fill', (_, i) => d3.schemeCategory10[i % 10])
    //     .attr('text-anchor', 'middle')
    //     .attr('transform', (d: any) => `translate(${d.x}, ${d.y})rotate(${d.rotate})`)
    //     .text((d: any) => d.text);
    // }
  }
}
