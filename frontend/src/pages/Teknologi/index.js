import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Teknologi = () => {
    return (
        <>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                        <FontAwesomeIcon icon="fas fa-home" />
                    </Breadcrumb.Item>

                    <Breadcrumb.Item active>
                        Teknologi
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Card>
                    <Card.Header>
                    <h2>
                        Teknologi
                    </h2>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Sistem memaparkan maklumat data PRU DUN Ke-15 ini menggunakan teknologi <i>Open Source</i>. Seksyen Aplikasi ICT (SAICT) diamanahkan
                            oleh Jabatan Penyiaran Malaysia untuk menyediakan satu laman web yang mesra paparan <i>MOBILE</i> dan juga <i>DESKTOP</i> bagi memaparkan maklumat pilihanraya secara <i>REALTIME</i> dari bilik gerakan.
                        </Card.Text>

                        <Card.Text>
                            Latensi data telah diuji agar tidak melebihi 5 saat dari bilik gerakan ke portal. Pengisi Data RTM di bilik gerakan akan mengisi maklumat menggunakan 
                            teknologi GOOGLE CLOUD iaitu :
                            <ul>
                                <li>GOOGLE SHEET</li>
                                <li>GOOGLE DRIVE</li>
                            </ul>
                            Kemudian data akan dihantar menggunakan GOOGLE SCRIPT ke Pangkalan Data Utama di RTM sebelum di paparkan ke PORTAL rasmi di https://pilihanraya.rtm.gov.my.
                            <br />
                            <br />
                            Sebelum data dikeluarkan ke PORTAL, ianya perlu melalui beberapa fasa pengesahan dari <i>VERIFIER</i> untuk memastikan data adalah tepat
                            dengan merujuk sumber pelapor di lokasi serta pangkalan Suruhanjaya Pilhanraya (SPR).
                        
                        </Card.Text>

                        <h2>Perisian</h2>
                        <Card.Text>
                            Sistem laman web ini dibina menggunakan teknologi <i>OPEN SOURCE</i> seperti berikut :
                            <ol>
                                <li>Frontend menggunakan teknologi SpA ( Single Page Action ) dari ReactJS.</li>
                                <li>API Backend menggunakan teknologi RESTful dari perisian <i>framework</i> LARAVEL.</li>
                                <li>API <i>server</i> yang dikuasai oleh NGINX dan PHP Swoole untuk pastikan kelajuan tinggi dan kemampuan menahan <i>load concurrent</i> yang tinggi.</li>
                                <li><i>Process Manager</i> dari PM2 untuk melihat metrik penggunaan <i>resource server</i> secara <i>realtime</i>.</li>
                                <li>Sistem Smart CACHE untuk pastikan Pangkalan Data tidak <i>overload</i> sewaktu trafik tinggi.</li>
                                <li>Pangkalan Data MySQL Enterprise dari ORACLE.</li>
                                <li><i>Web server</i> prestasi tinggi dari NGINX yang telah ditala untuk keselamatan dan trafik yang tinggi.</li>
                                <li>Paparan yang mudah dan kemas menggunakan Bootstrap 5 CSS <i>Framework</i>.</li>
                                <li>Sistem pengurusan <i>source code</i> dari GIT.</li>
                                <li>Sistem operasi dari UBUNTU.</li>
                                <li>Sistem automasi dari CRON.</li>
                                <li>Sistem automasi dari BASH Script.</li>
                            </ol>
                        </Card.Text>

                        <Card.Text>
                        <h2>Bahasa</h2>
                            Bahasa aturcara yang digunakan adalah seperti berikut :
                            <ol>
                                <li>JAVASCRIPT di <i>frontend</i></li>
                                <li>HTML di <i>frontend</i></li>
                                <li>CSS di <i>frontend</i></li>
                                <li>PHP di <i>backend</i></li>
                                <li>Protokol REST untuk API</li>
                                <li>Google App Script di <i>backend</i></li>
                            </ol>
                        </Card.Text>

                        <Card.Text>
                            <h2>Proses</h2>
                            SAICT menggunakan pendekatan <i>Rapid Software Development Life Cycle (SDLC)</i> untuk mempercepatkan pembangunan portal.
                        </Card.Text>

                        <Card.Text>
                            <h2>Keselamatan</h2>
                            SAICT menggunakan <i>security ranking</i> dari Mozilla Observatory untuk menilai tahap keselamatan laman web ini
                            dan telah memperolehi gred <strong>B+</strong>.
                            <br />
                            Rujuk pautan berikut: <a target="_blank" href="https://observatory.mozilla.org/analyze/pilihanraya.rtm.gov.my">
                            <strong>https://observatory.mozilla.org/analyze/pilihanraya.rtm.gov.my</strong>
                            </a>
                        </Card.Text>

                        <Card.Text>
                            <h2>Server</h2>
                            Menggunakan perkhidmatan <i>Server</i> Pusat Data Sentral Awam (PDSA MAMPU)
                        </Card.Text>

                    </Card.Body>
                </Card>
       
            </Container>
    
        </>
    )
}

export default Teknologi