export class UpdatePlayerDto {
  constructor(
    public id: number,
    public fifa_version?: string,
    public fifa_update?: string,
    public long_name?: string,
    public player_face_url?: string,
    public age?: number,
    public overall?: number,
    public potential?: number,
    public player_positions?: string,
    public nationality_name?: string | null,
    public club_name?: string | null,
    public preferred_foot?: string | null,
    public pace?: number | null,
    public shooting?: number | null,
    public passing?: number | null,
    public dribbling?: number | null,
    public defending?: number | null,
    public physic?: number | null,
  ) { }
}
