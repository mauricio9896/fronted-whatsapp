import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { templateModel } from '../../models/bodyModel.model';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent implements OnInit, AfterViewInit  {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  id !: any;
  search_text : string = "";

  //! variables de prueba
  displayedColumns : any[] = ['name', 'selected'];
  dataSource!: MatTableDataSource<any>;


  constructor(private router : Router, private route : ActivatedRoute, private service : ChatService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })

    // consume el servicio para obtener las plantillas
    this.dataSource.data = this.service.getTemplates()
  }

  navigate(){
    this.router.navigate(["home/chat/body", this.id])
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(){
    const filterValue = this.search_text;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  sendTemplate(template:templateModel){
    this.service.sendTemplate(template).subscribe(data =>{
      console.log('data :>> ', data);
    })
  }
}
