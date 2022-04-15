// import React, { Component, Fragment } from 'react';

// import Select from 'react-select';


// interface State {
//   readonly isClearable: boolean;
//   readonly isDisabled: boolean;
//   readonly isLoading: boolean;
//   readonly isRtl: boolean;
//   readonly isSearchable: boolean;
// }

// export default class SingleSelect extends Component<{}, State> {
//   state: State = {
//     isClearable: true,
//     isDisabled: false,
//     isLoading: false,
//     isRtl: false,
//     isSearchable: true,
//   };


//   render() {


//     const { isClearable, isSearchable, isLoading } =
//       this.state;

//     return (
//       <Fragment>
//         <Select
//           className="basic-single"
//           classNamePrefix="select"
//           defaultValue={""}
//           isLoading={isLoading}
//           isClearable={isClearable}
//           isSearchable={isSearchable}
//           name="color"
//           options={}
//         />

//         <div
//           style={{
//             color: 'hsl(0, 0%, 40%)',
//             display: 'inline-block',
//             fontSize: 12,
//             fontStyle: 'italic',
//             marginTop: '1em',
//           }}
//         >
          
//         </div>
//       </Fragment>
//     );
//   }
// }

import React from 'react'

function Search() {
  return (
    <div>Search</div>
  )
}

export default Search