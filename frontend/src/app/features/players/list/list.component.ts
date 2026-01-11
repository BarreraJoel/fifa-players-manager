import { Component, inject, OnInit, signal } from '@angular/core';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardTableImports } from '@/shared/components/table/table.imports';
import { ZardPaginationComponent, ZardPaginationPreviousComponent, ZardPaginationNextComponent } from "@/shared/components/pagination/pagination.component";
import { PlayerService } from '@/services/player/player.service';
import { Router } from '@angular/router';
import { CsvService } from '@/services/csv.service';
import { PositionsPipe } from '@/pipes/positions.pipe';
import { PreferredFootPipe } from '@/pipes/preferred-foot.pipe';
import { BackButtonComponent } from "@/components/common/back-button/back-button.component";
import { EditButtonComponent } from "@/components/player/edit-button/edit-button.component";
import { FormsModule } from '@angular/forms';
import { ZardFormControlComponent, ZardFormFieldComponent, ZardFormLabelComponent } from "@/shared/components/form/form.component";
import { ZardIconComponent } from "@/shared/components/icon/icon.component";
import { ZardSelectComponent } from '@/shared/components/select/select.component';
import { ZardSelectItemComponent } from "@/shared/components/select/select-item.component";
import { ZardInputDirective } from '@/shared/components/input/input.directive';
import { QueryParamsPlayers } from '@/interfaces/paginate';

type FilterOptions = 'long_name' | 'nationality_name' | 'club_name';

@Component({
  selector: 'app-list',
  imports: [
    ZardTableImports,
    ZardButtonComponent,
    ZardPaginationComponent,
    ZardPaginationPreviousComponent,
    ZardPaginationNextComponent,
    PositionsPipe,
    PreferredFootPipe,
    BackButtonComponent,
    EditButtonComponent,
    FormsModule,
    ZardIconComponent,
    ZardFormControlComponent,
    ZardFormFieldComponent,
    ZardSelectComponent,
    ZardSelectItemComponent,
    ZardInputDirective,
    ZardFormLabelComponent
],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  protected currentPage = signal(1);
  protected isExporting = signal(false);
  protected playerService: PlayerService = inject(PlayerService);
  protected csvService: CsvService = inject(CsvService);
  protected rowsPerPage = 10;
  protected filterText = "";
  protected filterOption: FilterOptions = "long_name";

  constructor(private router: Router) { }

  protected goToPage(page: number) {
    this.currentPage.set(page);
  }

  protected goToPrevious($event: any) {
    const prevCursor = this.playerService.playersPaginate$().paginate_info.prev_cursor;
    const hasPrevious = this.playerService.playersPaginate$().paginate_info.has_previous;
    if (hasPrevious) {
      this.filter({ before: prevCursor as string });
    }
    this.currentPage.set(this.currentPage() - 1);
  }

  protected goToNext($event: any) {
    const nextCursor = this.playerService.playersPaginate$().paginate_info.next_cursor;
    const hasNext = this.playerService.playersPaginate$().paginate_info.has_next;
    if (hasNext) {
      this.filter({ after: nextCursor as string });
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
    this.filter();
  }

  protected filter(queryPaginate?: { after?: string, before?: string }) {
    let fullQuery: QueryParamsPlayers = {
      limit: this.rowsPerPage
    };

    if (queryPaginate?.after) {
      fullQuery.after = queryPaginate.after;
    }
    if (queryPaginate?.before) {
      fullQuery.before = queryPaginate.before;
    }

    if (this.filterText != "") {
      if (this.filterOption == "long_name") {
        fullQuery.long_name = this.filterText;
      }
      else if (this.filterOption == "club_name") {
        fullQuery.club_name = this.filterText;
      }
      else {
        fullQuery.nationality_name = this.filterText;
      }
    }

    this.playerService.loadPlayers(fullQuery);
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

  protected deleteFilters() {
    this.playerService.loadPlayers({
      limit: this.rowsPerPage
    });
    this.filterText = "";
  }



}
