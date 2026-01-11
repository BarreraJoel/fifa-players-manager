import Player from "../../models/player";

export class PlayerResource {
    static toResponse(player: Player) {
        return {
            id: player.id,
            fifa_version: player.fifa_version,
            fifa_update: player.fifa_update,
            long_name: player.long_name,
            player_face_url: player.player_face_url,
            nationality_name: player.nationality_name,
            club_name: player.club_name,
            age: player.age,
            player_positions: player.player_positions,
            preferred_foot: player.preferred_foot,
            overall: player.overall,
            potential: player.potential,
            pace: player.pace,
            shooting: player.shooting,
            passing: player.passing,
            dribbling: player.dribbling,
            defending: player.defending,
            physic: player.physic,
        };
    }
}
