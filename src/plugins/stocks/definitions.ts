export interface CreaPlugin {
    echo(options: { value: string }): Promise<{ value: string }>;
    stock(options: { name: string }): Promise<{ name: string }>;
    showSwiftUIView(options : {name: string}): Promise<{ name: string }>;
  }
  