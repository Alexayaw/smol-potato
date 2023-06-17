declare module 'd3-cloud' {
    import { Selection } from 'd3';
  
    export function cloud(): CloudLayout<any>;
    export interface CloudLayout<Datum> {
      size(): [number, number];
      size(size: [number, number]): CloudLayout<Datum>;
      words(): Datum[];
      words(words: Datum[]): CloudLayout<Datum>;
      padding(): number | ((d: Datum, i: number) => number);
      padding(padding: number | ((d: Datum, i: number) => number)): CloudLayout<Datum>;
      rotate(): number | ((d: Datum, i: number) => number);
      rotate(rotate: number | ((d: Datum, i: number) => number)): CloudLayout<Datum>;
      fontSize(): number | ((d: Datum, i: number) => number);
      fontSize(size: number | ((d: Datum, i: number) => number)): CloudLayout<Datum>;
      fontStyle(): string | ((d: Datum, i: number) => string);
      fontStyle(style: string | ((d: Datum, i: number) => string)): CloudLayout<Datum>;
      fontWeight(): string | ((d: Datum, i: number) => string);
      fontWeight(weight: string | ((d: Datum, i: number) => string)): CloudLayout<Datum>;
      text(): string | ((d: Datum, i: number) => string);
      text(text: string | ((d: Datum, i: number) => string)): CloudLayout<Datum>;
      spiral(): string | ((size: [number, number]) => Spiral);
      spiral(spiral: string | ((size: [number, number]) => Spiral)): CloudLayout<Datum>;
      start(): CloudLayout<Datum>;
      on(type: 'end', listener: (words: Datum[]) => void): CloudLayout<Datum>;
    }
  
    export interface Spiral {
      (t: number): [number, number];
    }
  }
  