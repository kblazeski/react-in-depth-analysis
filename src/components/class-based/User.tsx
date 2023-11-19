import React, { ReactElement } from 'react';

interface Props {
  name: string;
  years: number;
  pictureLink: string;
}

export class User extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
    this.state = {
      open: 0,
    }
  }
  render(): ReactElement {
    return (
      <div>
        {this.props.years > 18 ? (
          <div className='user'>
            <p>
              Name: <b>{this.props.name}</b>
            </p>
            <p>
              Years: <b>{this.props.years}</b>
            </p>
            <img src={this.props.pictureLink} width='100px' height='100px' />
          </div>
        ) : null}
      </div>
    );
  }
}
