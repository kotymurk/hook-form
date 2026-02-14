import { useForm } from 'react-hook-form';
import './App.css';
import { isValidDateValue } from '@testing-library/user-event/dist/utils';

export default function App() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className='App'>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input
            {...register('firstName', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 5,
                message: 'Минимальная длина 5 символов',
              },
            })}
          />
        </label>
        <div style={{ height: 10 }}>
          {errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
        </div>

        <label>
          Last Name:
          <input
            {...register('lastName', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 5,
                message: 'Минимальная длина 5 символов',
              },
            })}
          />
        </label>
        <div style={{ height: 10 }}>
          {errors?.lastName && <p>{errors?.lastName?.message || 'Error!'}</p>}
        </div>

        <input type='submit' disabled={!isValid} />
      </form>
    </div>
  );
}
