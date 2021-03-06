import { ComponentRef, Injectable, ViewContainerRef, Injector } from '@angular/core';

import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { OverlayRef, OverlayConfig, Overlay } from '@angular/cdk/overlay';
import { ProductFormPresentation } from '../product-list-presentation/product-form-presentation/product-form.presentation';
import { Product } from '../../models/product';
import { Subject } from 'rxjs';

@Injectable()
export class ProductListPresenter {

  // subject for add form details
  public addFormDetails: Subject<Product>;
  public updateFormDetails: Subject<Product>;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
  ) {
    this.addFormDetails = new Subject<Product>();
    this.updateFormDetails = new Subject<Product>();
  }

  /**
   * create overay of product form
   */
  public createProductForm(productDetail: Product) {
    let config: OverlayConfig;
    let overlayRef: OverlayRef;
    let ref: ComponentRef<ProductFormPresentation>;

    config = new OverlayConfig();

    config.hasBackdrop = true;

    config.positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
    overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });

    ref = overlayRef.attach(new ComponentPortal(ProductFormPresentation, this.viewContainerRef,
      this.createInjector(productDetail, overlayRef))
    );
    ref.instance.addProduct.subscribe((formData: Product) => {
      if (formData) {
        this.addFormDetails.next(formData);
      }
    });

  }

  private createInjector(productDetail: Product, overlayRef: OverlayRef): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(OverlayRef, overlayRef);
    return new PortalInjector(this.injector, injectorTokens);
  }

}
