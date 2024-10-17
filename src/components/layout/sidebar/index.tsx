import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useMemo, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GenMenuList } from '@utils';
import { path } from '@routes/menu/menu';

function Sidebar() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const sidebarPath = useMemo(() => {
    const index = path.find((item) => item.path === '');
    return index?.children?.filter((item) => item?.isShowSidebar) || [];
  }, [path]);

  const _Menu = [
    {
      key: "1",
      label: "Product",
      children:[
        {
          key:"1-1",
          label: "Product Detail",
          onClick: () => navigate("detail")
        },
        {
          key:"1-2",
          label: "Product List",
          onClick: () => navigate("product/list")
        }
      ]
    },
    {
      key: "2",
      label: "Feedback",
      children:[
        {
          key:"2-1",
          label: "Feedback Detail",
          onClick: () => navigate("/feedback/detail")
        },
        {
          key:"2-2",
          label: "Feedback List",
          onClick: () => navigate("/feedback/list")
        }
      ]
    }
  ]

  return (
    <div style={{ width: '200px', height: '100vh' }}>
       <Menu
        // defaultSelectedKeys={['Feedback Detail']}
        // defaultOpenKeys={['Feedback Detail']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={_Menu}
        style={{ height: 'calc(100% - 100px)' }}
      />
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </div>
  );
}

export default Sidebar;
