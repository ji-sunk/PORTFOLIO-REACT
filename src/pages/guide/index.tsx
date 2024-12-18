import * as React from "react";
import { Helmet as Head } from "react-helmet";
import Accordion from "src/components/guide/Accordion";
import Badge from "src/components/guide/Badge";
import BpComponent from "src/components/guide/BpComponent";
import Buttons2 from "src/components/guide/Buttons2";
import Forms from "src/components/guide/Forms";
import styles from "src/components/guide/Guide.module.css";
import GuideLayout from "src/components/guide/GuideLayout";
import Icons2 from "src/components/guide/Icons2";
import Tab from "src/components/guide/Tab";
import Table from "src/components/guide/Table";
import Title from "src/components/guide/Title";
import Typo from "src/components/guide/Typo";

const Guide = () => {
  const [selected, setSelected] = React.useState(false);
  return (
    <>
      <Head>
        <title>HYUNDAI Guide</title>
      </Head>
      <GuideLayout>
        <h1 className={styles.title}>BP Mobile HYUNDAI Components Guide</h1>

        <section className={styles.section}>
          <h2 className={styles.title}>1. 텍스트 컴퍼넌트</h2>
          <div className={styles.guideBox}>
            <dl className={styles.itemDesc}>
              <dt>props</dt>
              <dd>
                *:lang(ko)1줄 말줄임 | *:lang(en)2줄 말줄임
                <br /> variant="h1"(32px) | variant="h2"(18px) |
                variant="h3"(16px) | variant="h4"(15px) | variant="h5"(14px) |
                variant="h6"(13px) | variant="subtitle1"(24px) |
                variant="subtitle2"(14px) | variant="body1"(14px) |
                variant="body2"(13px) | variant="caption"(12px) |
                variant="overline"(12px)
              </dd>
              <dd>
                align="center" | align="inherit" | align="justify" |
                align="left" | align="right"
              </dd>
              <dd>
                h1:'h1'" | h2: 'h2'" | h3: 'h3" | h4: 'h4'" | h5: 'h5'" | h6:
                'h6'" | subtitle1: 'h6'" | subtitle2: 'h6'" | body1: 'p'" |
                body2: 'p'" | inherit: 'p'
              </dd>
            </dl>
          </div>
          <Typo />
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>2. 아이콘 컴퍼넌트</h2>
          <div className={styles.guideBox}>
            <dl className={styles.itemDesc}>
              <dt>props</dt>
              <dd>
                fontSize="small"(18px*18px), className="xsmall" |
                fontSize="small"(20px*20px), className="small" |
                fontSize="medium"(24px*24px), className="medium" |
                fontSize="large"(28px*28px), className="large"
              </dd>
              <dd>
                color="primary" | color="secondary" | color="error" |
                color="info" | color="success" | color="warning"
              </dd>
            </dl>
          </div>
          <div>
            <Icons2 />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>3. 버튼 컴퍼넌트</h2>
          <div className={styles.guideBox}>
            <dl className={styles.itemDesc}>
              <dt>props</dt>
              <dd>variant="text" | variant="outlined" | variant="contained"</dd>
              <dd>
                size="small"(height:28px) | size="medium"(height:32px) |
                size="large"(height:40px) | size="large"
                className="btn-xlarge"(height:53px)
              </dd>
              <dd>
                color="inherit" | color="primary" | color="secondary" |
                color="info"| color="success" |color="warning" | color="error"
              </dd>
            </dl>
          </div>
          <div>
            <Buttons2 />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>4. Form 컴퍼넌트</h2>
          <div className={styles.guideBox}>
            <dl className={styles.itemDesc}>
              <dt>props(공통)</dt>
              <dd>
                color="inherit" | color="primary" | color="secondary" |
                color="info"| color="success" |color="warning" | color="error"
              </dd>
              <dt>props(TextField,Autocomplete)</dt>
              <dd>
                variant="outlined" | variant="filled"(기본) | variant="standard"
              </dd>
              <dd>size="small"(height:40px) | size="medium"(height:53px)</dd>
              <dt>props(Checkbox,Radio)</dt>
              <dd>size="small"(height:38px) | size="medium"(height:42px)</dd>
              <dd>버튼유형 size="medium"(height:40px)</dd>
            </dl>
          </div>
          <div>
            <Forms />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>5. 뱃지 이미지 컴퍼넌트</h2>
          <div className={styles.guideBox}>
            <dl className={styles.itemDesc}>
              <dt>props(Avatar)</dt>
              <dd>variant="circular" | variant="rounded" | variant="square"</dd>
              <dt>props(Chip)</dt>
              <dd>size="small"(height:24px) | size="medium" | size="string"</dd>
            </dl>
          </div>
          <div>{<Badge />}</div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>6. 타이틀 컴퍼넌트</h2>
          <div className={styles.guideBox}>
            <dl className={styles.itemDesc}>
              <dt>컴퍼넌트 사용 설명</dt>
              <dd>
                className="bp-group-title" =&#62; 타이틀 컴퍼넌트 UI를 담당
              </dd>
              <dd>
                타이틀 그룹 구조 =&#62; bp-group-title(전체 그룹) &#62;
                bp-group-title-row(그룹 하위 ROW) &#62; bp-title(타이틀
                컴퍼넌트)
              </dd>
            </dl>
          </div>
          <div>
            <Title />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>7. 테이블 컴퍼넌트</h2>
          <div className={styles.guideBox}>
            <dl className={styles.itemDesc}>
              <dt>props(DataGrid)</dt>
              <dd>
                density="standard"([기본]height:44px) |
                density="compact"(height:38px) | density="comfortable"
              </dd>
              <dt>props(Table)</dt>
              <dd>
                size="medium"([기본]height:44px) | size="small"(height:38px)
              </dd>
            </dl>
          </div>
          <div>
            <Table />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>8. Tab 컴퍼넌트</h2>
          <div className={styles.guideBox}>
            <dl className={styles.itemDesc}>
              <dt>props(DataGrid)</dt>
              <dd>
                density="standard"([기본]height:44px) |
                density="compact"(height:38px) | density="comfortable"
              </dd>
              <dt>props(Tab)</dt>
              <dd>
                size="medium"([기본]height:44px) | size="small"(height:38px)
              </dd>
            </dl>
          </div>
          <div>
            <Tab />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>9. Accordion 컴퍼넌트</h2>
          <div className={styles.guideBox}>
            <dl className={styles.itemDesc}>
              <dt>props(DataGrid)</dt>
              <dd>
                density="standard"([기본]height:44px) |
                density="compact"(height:38px) | density="comfortable"
              </dd>
              <dt>props(Tab)</dt>
              <dd>
                size="medium"([기본]height:44px) | size="small"(height:38px)
              </dd>
            </dl>
          </div>
          <div>
            <Accordion />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>10. UI 컴퍼넌트</h2>
          <div className={styles.guideBox}>
            <dl className={styles.itemDesc}>
              <dt>퍼블 UI 사용 설명서</dt>
              <dd>
                <ol className={styles.olList}>
                  <li>
                    전체 UI 레이아웃: Paper컴퍼넌트 최 상위에서 UI를 만들 때
                    사용하며, 페이지에 한번 사용 됩니다.
                    <br />- 기본 공통: elevation={0} className="ui-paper
                    UI유형class명"
                    <br />- 필터 UI: className="ui-filter"
                    <br />- 상세 UI: className="ui-detail"
                    <br />- 저장/수정 UI: className="ui-register"
                    <br /> (UI는 더 추가될 수 있으며, 멀티 class로 해당
                    페이지마다 추가해서 사용할 수 있습니다.)
                  </li>
                  <li>
                    퍼블에서 만든 공통 컴퍼넌트명: className="bp-*"
                    <br />
                    (테이블:bp-tbl, 리스트:bp-list, 아이콘:bp-icon,
                    툴팁:bp-tooltip, 카드:bp-card, UI 그리드타입
                    묶음(Grid):bp-grid-wrap, 필드 그리드타입
                    묶음(div):bp-grid-field-wrap, 필드
                    그리드(Grid):bp-grid-field 등..)
                  </li>
                  <li>
                    퍼블에서 만든 공통 컴퍼넌트명: className="item-*"
                    <br />
                    (dl요소에 주로 사용해서 데이터를 담는 UI를 만들 때
                    사용합니다. 기본 전체 공통으로 사용되나 bp-card나
                    bp-list타입에 따라서도 css가 달리 적용될 수 있습니다.)
                  </li>
                  <li>
                    퍼블에서 만든 컴퍼넌트 item-*와 bp-grid-field 사용 상세
                    <br />
                    해당 컴퍼넌트는 itme컴퍼넌트 안에서 grid 컴퍼넌트를 사용할
                    수 도 있고, grid 컴퍼넌트 안에서 item컴퍼넌트를 사용할 수 도
                    있어 상황에 맞게 사용한다.
                  </li>
                  <li>
                    bp-grid-field 사용 규칙
                    <div>
                      &lt;Grid container spacing=&#123;2&#125;
                      className="bp-grid-field type-valign-center"&gt;
                      <br />
                      &lt;Grid xs= &#123;6&#125;&gt;12그리드 중 6
                      사용&lt;/Grid&gt;
                      <br />
                      &lt;Grid xs= &#123;4&#125;&gt;12그리드 중 4
                      사용&lt;/Grid&gt;
                      <br />
                      &lt;Grid xs="auto"&gt;넓이 auto로 사용할 경우&lt;/Grid&gt;
                      <br />
                      &lt;/Grid&gt;
                    </div>
                  </li>
                  <li>
                    폼 관련 컴퍼넌트
                    <br />- 기본은 size="medium"에 label이 있는 형태이며,
                    focus시 애니메이션이 작동한다
                    <br />- 상세페이지와 같이 dl요소에 넣어 타이틀 영역이 있는
                    화면에 경우 size="small"에 label이 없는
                    형태(hiddenLabel)이며, focus시 애니메이션이 작동하지 않는다
                    <br />- 테이블 안에 작성되는 form요소는 size="small"로 한다.
                  </li>
                </ol>
              </dd>
            </dl>
          </div>
          <div>
            <BpComponent />
          </div>
        </section>
      </GuideLayout>
    </>
  );
};

export default Guide;
