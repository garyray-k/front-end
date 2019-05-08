import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import * as Yup from 'yup';
import { updateUser } from 'common/constants/api';
import { validationErrorMessages } from 'common/constants/messages';
import Select from 'components/Form/Select/Select';
import styles from './steps.css';

class MilitaryStatus extends React.Component {
  static propTypes = {
    isSubmitting: PropTypes.bool,
  };

  static defaultProps = {
    isSubmitting: false,
  };

  static validationSchema = Yup.object().shape({
    militaryStatus: Yup.string().required(validationErrorMessages.required),
  });

  static initialValues = {
    militaryStatus: '',
  };

  static submitHandler = async values => {
    console.log('Values at Military Status:', values);
    await updateUser(values);
  };

  render() {
    const { isSubmitting } = this.props;

    return (
      <>
        <h2 className={styles.row}>Military Status</h2>

        <p>How do you classify yourself in regards to being part of the military?</p>

        <div className={styles.row}>
          <Field
            className={styles.fullWidth}
            name="militaryStatus"
            label="Military Status*"
            component={Select}
            options={[
              {
                value: '',
                label: '-- Select One --',
              },
              {
                value: 'current',
                label: 'Currently Serving',
              },
              {
                value: 'veteran',
                label: 'Veteran',
              },
              {
                value: 'spouse',
                label: 'Spouse / Dependent',
              },
              {
                value: 'civilian',
                label: 'Not Applicable',
              },
            ]}
            disabled={isSubmitting}
          />
        </div>
      </>
    );
  }
}

export default MilitaryStatus;