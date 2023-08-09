import type { Meta, StoryObj } from '@storybook/react';

import { FloatingModal } from '../../molecules/FloatingModal';

const meta: Meta<typeof FloatingModal> = {
  title: 'organisms/FloatingActionModal',
  component: FloatingModal,
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FloatingModal>;

export const Default: Story = {
  render: (args) => (
    // const navigate = useNavigate();
    // const { search } = useLocation();

    <>
      <FloatingModal {...args} opened>
        <FloatingModal.Body>
          <>
            <div
              style={{
                padding: '3px',
                height: '10px',
                fontSize: '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                paddingRight: '24px',
                borderRight: 'solid 1px #DFE3EC',
              }}
            >
              리스트1
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '16px',
                padding: '0 24px',
              }}
            >
              <div
                style={{
                  padding: '3px',
                  height: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                리스트2
              </div>
              <div
                style={{
                  padding: '3px',
                  height: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                리스트3
              </div>
              <div
                style={{
                  padding: '3px',
                  height: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                리스트4
              </div>
              <div
                style={{
                  padding: '3px',
                  height: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                리스트5
              </div>

              <div
                style={{
                  padding: '3px',
                  height: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                리스트6
              </div>
            </div>
          </>
        </FloatingModal.Body>
        <FloatingModal.Tail>
          <div>X</div>
        </FloatingModal.Tail>
      </FloatingModal>
    </>
  ),
};
