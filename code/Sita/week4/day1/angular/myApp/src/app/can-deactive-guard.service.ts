import { Injectable } from '@angular/core';
import { CanDeactivate } from "@angular/router";
import { CanComponentDeactivate } from "./can-component-deactivate";
@Injectable() export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    if (component.canNavigate == true) { return true; }
    else {
      if (confirm("Do you want to discard changes?")) { return true; }
      else { return false; }
    }
  }
}
