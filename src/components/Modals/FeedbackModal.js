import React, { useState } from 'react';
import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style/index.css';

const FeedbackModal = props => {
  const { coachFirstName, coachLastName, feedback } = props;
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };

  return (
    <div>
      <p type='primary' onClick={showModal}>
        Open Modal
      </p>
      <Modal
        title='Basic Modal'
        visible={visible}
        onCancel={handleCancel}
        zIndex={10000}
      >
        <div>
          <h2>{`${coachFirstName} ${coachLastName}`}</h2>
          <p>{feedback}</p>
        </div>
      </Modal>
    </div>
  );
};

export default FeedbackModal;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles(theme => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
//   expandText: {
//     color: '#4fad65',
//     fontSize: '0.8rem',
//     fontWeight: 'bold',
//     marginTop: '0.5rem',
//     cursor: 'pointer',
//     width: '50%',
//   },
// }));

// const FeedbackModal = props => {
//   const classes = useStyles();
//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);
//   const { coachFirstName, coachLastName, feedback } = props;

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <p className={classes.expandText} onClick={handleOpen}>
//         Read full review
//       </p>
//       <Modal
//         aria-labelledby='simple-modal-title'
//         aria-describedby='simple-modal-description'
//         open={open}
//         onClose={handleClose}
//       >
//         <div style={modalStyle} className={classes.paper}>
//           <h2 id='simple-modal-title'>{`${coachFirstName} ${coachLastName}`}</h2>
//           <p id='simple-modal-description'>{feedback}</p>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default FeedbackModal;
