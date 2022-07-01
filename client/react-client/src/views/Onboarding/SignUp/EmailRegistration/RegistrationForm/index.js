import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { FormattedMessage, useIntl } from "react-intl";

function RegistrationForm({ nextAction }) {
  const intl = useIntl();
  const onFinish = useCallback(async (values) => {}, [nextAction]);

  return (
    <Form name="signup_form" className="container-form" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[
          {
            type: "email",
            message: intl.formatMessage({
              id: "registration.form.email.invalid-message",
            }),
          },
          {
            required: true,
            message: intl.formatMessage({
              id: "registration.form.email.required-message",
            }),
          },
        ]}
      >
        <Input
          prefix={<MailOutlined />}
          placeholder={intl.formatMessage({
            id: "registration.form.email.placeholder",
          })}
        />
      </Form.Item>
      <Form.Item>
        <Button style={{ width: "100%" }} type="primary" htmlType="submit">
          <FormattedMessage id="registration.form.button.label" />
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegistrationForm;
