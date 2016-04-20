# Download the Python helper library from twilio.com/docs/python/install
from twilio.rest import TwilioTaskRouterClient

# Your Account Sid and Auth Token from twilio.com/user/account
account_sid = "{{ account_sid }}"
auth_token  = "{{ auth_token }}"
workspace_sid = "{{ workspace_sid }}"
task_sid = "{{ task_sid }}"

client = TwilioTaskRouterClient(account_sid, auth_token)

# accept a reservation
reservation = client.reservations(workspace_sid, task_sid).update(reservation_sid, reservation_status='accepted')
print reservation.reservation_status
print reservation.worker_name

