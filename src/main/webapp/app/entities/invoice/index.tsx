import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Invoice from './invoice';
import InvoiceDetail from './invoice-detail';
import InvoiceUpdate from './invoice-update';
import InvoiceDeleteDialog from './invoice-delete-dialog';
import PrivateRoute from "app/shared/auth/private-route";
import MeetingUpdate from "app/entities/meeting/meeting-update";
import {AUTHORITIES} from "app/config/constants";

const Routes = ({ match }) => (
  <>
    <Switch>
      <PrivateRoute exact path={`${match.url}/new`} component={InvoiceUpdate} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.ACCOUNT_MANAGER]} />
      <PrivateRoute exact path={`${match.url}/:id/edit`} component={InvoiceUpdate} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.ACCOUNT_MANAGER]} />
     <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={InvoiceDetail} />
      <ErrorBoundaryRoute path={match.url} component={Invoice} />
    </Switch>
    <PrivateRoute exact path={`${match.url}/:id/delete`} component={InvoiceDeleteDialog} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.ACCOUNT_MANAGER]} />
  </>
);

export default Routes;
