export class Tag {
    constructor(
      public _title: string,
      public _is_selected: boolean
    ) {}

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get is_selected(): boolean {
    return this._is_selected;
  }

  public set is_selected(value: boolean) {
    this._is_selected = value;
  }
}
