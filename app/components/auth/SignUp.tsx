import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import SignUpForm from 'components/forms/SignUpForm';

import './auth.scss';

interface ISignProps extends RouteComponentProps<void> {
  setSnackBar: (text: string) => void;
}

const SignUpPage: React.SFC<ISignProps> = (props: ISignProps) => (
  <div className="container">
    <div className="page-wrapper">
      <h1>SignUp</h1>
      <SignUpForm {...props} />
    </div>
  </div>
);

export default withRouter(SignUpPage);
