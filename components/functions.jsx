export default async function handleSubmit(e) {
  e.preventDefault();
  const data = {
    email: e.target.email.value,
    inquirerName: e.target.name.value,
    soName: e.target.SOName.value,
    date: e.target.date.value,
    referral: e.target.referral.value,
    thoughts: e.target.thoughts.value,
  };
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  };
  const response = await fetch(
    'https://us-central1-wed-with-style-b50c8.cloudfunctions.net/app/sendmail',
    requestOptions
  );
  const responsedata = await response.json();
  if (response.ok) {
    document.getElementById('w-form-success').className = 'w-form-done visible';
  } else {
    document.getElementById('w-form-fail').className = 'visible';
  }
}
