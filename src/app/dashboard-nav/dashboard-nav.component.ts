import { Component, Injectable, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Router } from '@angular/router';

interface FoodNode {
  name: string;
  children?: FoodNode[];
  parent?: FoodNode;
}

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  parent?: FlatNode;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Dashboard',
  }, {
    name: 'Statistics',
    children: [
      { name: 'Tests' },
      { name: 'Devices' }, { name: 'Builds' },
      { name: 'Services' }, { name: 'Projects' },
    ]
  },
  {
    name: 'Reports',
    children: [
      { name: 'Tests' },
      { name: 'Devices' }, { name: 'Builds' },
      { name: 'Services' }, { name: 'Projects' },
    ]
  },
  {
    name: 'Configurations',
  }, {
    name: 'Overview',
    children: [
      { name: 'Tests' },
      { name: 'Devices' }, { name: 'Builds' },
      { name: 'Services' }, { name: 'Projects' },
    ]
  }
];

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss']
})

export class DashboardNavComponent implements OnInit {

  public content = 'Dashboard';

  private treeControl: FlatTreeControl<FlatNode>;

  private treeFlattener: MatTreeFlattener<any, any>;

  private dataSource: MatTreeFlatDataSource<any, any>;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.treeControl = new FlatTreeControl<FlatNode>(node => node.level, node => node.expandable);
    this.treeFlattener = new MatTreeFlattener(this.transformer, node => node.level, node => node.expandable, node => node.children);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = TREE_DATA; 
  }

  private transformer = (node: FoodNode, level: number) => {
    const transformed = {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      parent: node.parent
    };

    if(!!node.children){
      node.children.forEach(f =>{
        f.parent = node;
      });
    }

    return transformed;
  }

  public switch(){
    this.content = 'Configuration';
  }

  public navigateTo(node: FlatNode){
    node.parent ? this.content = node.parent.name + ' ' + node.name : this.content = node.name;
  }

  public hasChild(_: number, node: FlatNode) {
    return node.expandable;
  }

  public logout(){
    sessionStorage.setItem('loggedIn', 'false')
    this.router.navigateByUrl('logout');
  }
}
