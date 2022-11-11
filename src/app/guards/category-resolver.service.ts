import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ICategory } from '../models/ICategory';
import { CategoryService } from '../services/category.service';

@Injectable({
    providedIn: 'root'
})


export class CategoryResolverService implements Resolve<ICategory[]> {

    constructor(private categoryService: CategoryService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ICategory[] | Observable<ICategory[]> | Promise<ICategory[]> {

        let categories = this.categoryService.categories;
        return categories;
    }
    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ICategory[] | Observable<ICategory[]> | Promise<ICategory[]> {

    // }

}
