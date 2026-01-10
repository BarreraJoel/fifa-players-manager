import { Component, inject, OnInit, signal } from '@angular/core';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardTableImports } from '@/shared/components/table/table.imports';
import { ZardPaginationComponent, ZardPaginationPreviousComponent, ZardPaginationNextComponent } from "@/shared/components/pagination/pagination.component";
import { PlayerService } from '@/services/player/player.service';
import { Router } from '@angular/router';
import { CsvService } from '@/services/csv.service';
import { PositionsPipe } from '@/pipes/positions.pipe';
import { PreferredFootPipe } from '@/pipes/preferred-foot.pipe';

@Component({
  selector: 'app-list',
  imports: [
    ZardTableImports,
    ZardButtonComponent,
    ZardPaginationComponent,
    ZardPaginationPreviousComponent,
    ZardPaginationNextComponent,
    PositionsPipe,
    PreferredFootPipe
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  protected currentPage = signal(1);
  protected isExporting = signal(false);
  protected playerService: PlayerService = inject(PlayerService);
  protected csvService: CsvService = inject(CsvService);
  protected rowsPerPage = 100;

  constructor(private router: Router) { }

  protected goToPage(page: number) {
    this.currentPage.set(page);
  }

  protected goToPrevious($event: any) {
    const prevCursor = this.playerService.playersPaginate$().paginate_info.prev_cursor;
    const hasPrevious = this.playerService.playersPaginate$().paginate_info.has_previous;
    if (hasPrevious) {
      this.playerService.loadPlayers({
        before: prevCursor as string
      });
    }
    this.currentPage.set(this.currentPage() - 1);
  }

  protected goToNext($event: any) {
    const nextCursor = this.playerService.playersPaginate$().paginate_info.next_cursor;
    const hasNext = this.playerService.playersPaginate$().paginate_info.has_next;
    if (hasNext) {
      this.playerService.loadPlayers({
        after: nextCursor as string
      });
    }
    this.currentPage.set(this.currentPage() + 1);
  }

  protected onImageError(e: Event) {
    (e.target as HTMLImageElement).src = '/assets/player.png';
  }

  protected loadImage(playerId: number) {
    return this.playerService.loadPlayerImage(playerId);
  }

  async ngOnInit() {
    this.playerService.loadPlayers();
  }

  protected redirect(route: string) {
    this.router.navigateByUrl(route);
  }

  protected async exportToCsv() {
    this.csvService.exportCsv(
      this.playerService.playersPaginate$().items,
      'players.csv'
    );
  }

}
