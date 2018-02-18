import {Tag} from "./tag.model";

export class TagGroup {
  constructor(
    public _heading: string,
    public _tags: Tag[]
  ) {}

  public get heading(): string {
    return this._heading;
  }

  public set heading(value: string) {
    this._heading = value;
  }

  public get tags(): Tag[] {
    return this._tags;
  }

  public set tags(value: Tag[]) {
    this._tags = value;
  }
}
