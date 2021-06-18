import React from 'react';

const Pagination = (props) => {
  const pageLinks = [];
  // eslint-disable-next-line
  for (let i = 1; i < props.pages + 1; i++) {
    // eslint-disable-next-line
    const active = props.currentPage == i ? 'active' : '';
    // eslint-disable-next-line
    pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="google.com">{i}</a></li>);
  }
  return (
    <div className="container">
      <div className="row">
        <ul className="pagination">
          {/* eslint-disable-next-line */}
          {props.currentPage > 1 ? <li className={`waves-effect`} onClick={() => props.nextPage(props.currentPage -1 )}><a href="#">Prev</a></li> : ''}
          {pageLinks}
          {/* eslint-disable-next-line */}
          {props.currentPage < props.pages + 1 ? <li className={`waves-effect`} onClick={() => props.nextPage(props.currentPage + 1)}><a href="#">Next</a></li> : ''}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
