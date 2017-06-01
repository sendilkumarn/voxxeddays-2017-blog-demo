import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BlogsgBlogModule } from './blog/blog.module';
import { BlogsgEntryModule } from './entry/entry.module';
import { BlogsgTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BlogsgBlogModule,
        BlogsgEntryModule,
        BlogsgTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogsgEntityModule {}
