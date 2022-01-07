import LoginIcon from '@mui/icons-material/Login';
import { LoadingButton } from '@mui/lab/';
import { Grid, TextField } from '@mui/material';
import { useRouter } from '@uirouter/react';
import React, { useState } from 'react';

import { useAuthenticate } from '@/app/auth';

const defaultValues = {
  name: '',
  password: '',
};

const Auth = () => {
  const { authenticate } = useAuthenticate();
  const [formValues, setFormValues] = useState(defaultValues);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    await authenticate(formValues.name, formValues.password);
    setLoading(false);
    router.stateService.go('home');
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <TextField
            id="userId-input"
            name="name"
            label="User"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password-input"
            name="password"
            label="Password"
            type="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          {/* <Button type="submit" variant="contained" color="primary" disabled={loading}>
            {loading ? 'Authenticating...' : 'Login'}
          </Button> */}
          <LoadingButton
            type="submit"
            variant="contained"
            color="primary"
            loading={loading}
            loadingPosition="end"
            endIcon={<LoginIcon />}
          >
            Login
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export { Auth };
