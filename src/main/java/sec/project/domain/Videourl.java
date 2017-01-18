package sec.project.domain;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;

/**
 * Created by Teemu on 15.1.2017.
 */

@Entity
public class Videourl  extends AbstractPersistable<Long> {
    String videourl;

    public Videourl(String videourl) {
        this();
        this.videourl = videourl;
    }

    public Videourl() {
        super();
    }

    public String getVideourl() {
        return videourl;
    }

    public void setVideourl(String videourl) {
        this.videourl = videourl;
    }
}
