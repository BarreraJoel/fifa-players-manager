export class CreatePlayerDto {
  constructor(
    public fifa_version: string,
    public fifa_update: string,
    public long_name: string,
    public player_face_url: string,
    public age: number,
    public overall: number,
    public potential: number,
    public player_positions: string,
    public nationality_name?: string,
    public club_name?: string,
    public preferred_foot?: string,
    public pace?: number,
    public shooting?: number,
    public passing?: number,
    public dribbling?: number,
    public defending?: number,
    public physic?: number,
  ) { }
}
