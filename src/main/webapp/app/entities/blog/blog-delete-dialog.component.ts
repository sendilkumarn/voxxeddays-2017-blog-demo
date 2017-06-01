import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlertService, EventManager } from 'ng-jhipster';

import { Blog } from './blog.model';
import { BlogPopupService } from './blog-popup.service';
import { BlogService } from './blog.service';

@Component({
    selector: 'jhi-blog-delete-dialog',
    templateUrl: './blog-delete-dialog.component.html'
})
export class BlogDeleteDialogComponent {

    blog: Blog;

    constructor(
        private blogService: BlogService,
        public activeModal: NgbActiveModal,
        private alertService: AlertService,
        private eventManager: EventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.blogService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'blogListModification',
                content: 'Deleted an blog'
            });
            this.activeModal.dismiss(true);
        });
        this.alertService.success('blogsgApp.blog.deleted', { param : id }, null);
    }
}

@Component({
    selector: 'jhi-blog-delete-popup',
    template: ''
})
export class BlogDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private blogPopupService: BlogPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modalRef = this.blogPopupService
                .open(BlogDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
