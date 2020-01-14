import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import { Select } from 'formik-material-ui';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import { StyledButton, buttonTheme, Logo } from '../Landing';
import { chooseUserRole } from '../../state/actions/authenticationActions';
import {
  GreyBackgroundContainer,
  FormCard,
  FormContainer,
} from './LoginForm';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const NavLogo = styled(Logo)`
  a {
    width: 1.5rem;
    height: 1rem;
  }
`;

const StyledError = styled.p`
  padding: 0;
  margin: 0;
  color: red;
  font-size: 0.8rem;
`;

const ThisGreyBackgroundContainer = styled(GreyBackgroundContainer)`
  /* fonts should be global
  font-family: ABeeZee;
   */
`;

const StudentCard = styled(FormCard)`
  width: 80%;
`;

const FormSelect = () => {
  return (
    <Select>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
    </Select>
  );
};

function StudentForm({ touched, errors, isSubmitting }) {
  return (
    <div>
      <ThisGreyBackgroundContainer>
        <StudentCard>
          <Link to='/userrole'>
            <NavLogo />
          </Link>
          <h1>Student Form</h1>
          <FormContainer>
            <Form>
              <div>
                <Field
                  type='text'
                  name='userLocation'
                  placeholder='Location'
                />
                {errors.userLocation && touched.userLocation && (
                  <StyledError>{errors.userLocation}</StyledError>
                )}
              </div>
              <div>
                <Field
                  type='text'
                  name='experience'
                  placeholder='Select Level Of Experience'
                />
                {errors.experience && touched.experience && (
                  <StyledError>{errors.experience}</StyledError>
                )}
              </div>
              <div>
                <Field
                  type='text'
                  name='confidence'
                  placeholder='Select Confidence Level'
                />
                {errors.confidence && touched.confidence && (
                  <StyledError>{errors.confidence}</StyledError>
                )}
              </div>
              <div>
                <StyledButton
                  type='submit'
                  disabled={isSubmitting}
                  theme={buttonTheme}
                >
                  Submit
                </StyledButton>
              </div>
            </Form>
          </FormContainer>
        </StudentCard>
      </ThisGreyBackgroundContainer>
    </div>
  );
}

const FormikStudentForm = withFormik({
  mapPropsToValues({ userLocation, experience, confidence }) {
    return {
      userLocation: userLocation || '',
      experience: experience || '',
      confidence: confidence || '',
    };
  },
  validationSchema: Yup.object().shape({
    userLocation: Yup.string().required('Please enter a location'),
    experience: Yup.string().required(
      'Please enter Your experience level',
    ),
    confidence: Yup.string().required(
      'Please enter your confidence level',
    ),
  }),
  handleSubmit(values, { resetForm, setSubmitting, props }) {
    resetForm();
    setSubmitting(false);
    props.chooseUserRole(props, values, 1);
  },
})(StudentForm);

export default connect(state => state, {
  chooseUserRole,
})(FormikStudentForm);
